import React, { useState } from 'react';
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import  { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../../components/Forms/Input';
import { InputForm } from '../../components/Forms/InputForm';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionType
} from './styles';

interface FormData {
    name: string;
    amount: string;
}

const schema =  Yup.object().shape({
    name: Yup
        .string()
        .required('Nome é obrigatório'),
    amount: Yup
        .number()
        .required('O Preço é Obrigatório.')
        .positive('O valor não pode ser negativo.'),
})

export function Register(){
    const [transactionalType, setTransactionalType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    
    const [category, setCategory] = useState ({
        key: 'category',
        name: 'Categoria'
    });

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleTransactionsTypedESelect(type: 'up' | 'down'){
        setTransactionalType(type);
    }

    function handleOpenSelectCategory(){
        setCategoryModalOpen(true);
    }

    function handleCloseSelectCategory(){
        setCategoryModalOpen(false);
    }

    function handleRegister(form : FormData){
        if(!transactionalType)
            return Alert.alert('Selecione um tipo de transação');

        if(category.key === 'category')
            return Alert.alert('Selecione uma categoria');    

        const data = {
            name: form.name,
            amount: form.amount,
            transactionalType,
            category: category.key
        }

        console.log(data);
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>

                <Form>
                    <Fields>
                        <InputForm 
                            name="name"
                            control={control}
                            placeholder="Nome"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            error={errors.name && errors.name.message}                    
                        />

                        <InputForm 
                            name="amount"
                            control={control}
                            placeholder="Preço"
                            keyboardType='numeric' 
                            error={errors.amount && errors.amount.message}               
                        />
                        <TransactionType>
                            
                            <TransactionTypeButton 
                                title="Entrada" 
                                type="up"
                                onPress={ () => handleTransactionsTypedESelect('up') } 
                                isActive={transactionalType === 'up'} 
                            />
                            
                            <TransactionTypeButton 
                                title="Saída" 
                                type="down" 
                                onPress={ () => handleTransactionsTypedESelect('down') } 
                                isActive={transactionalType === 'down'} 
                            />
                        </TransactionType>

                        <CategorySelectButton 
                            title={category.name}
                            onPress={handleOpenSelectCategory}
                        />
                    </Fields>
                
                    <Button 
                        title="Enviar"
                        onPress={handleSubmit(handleRegister)}    
                    />
                
                </Form>

                <Modal visible={categoryModalOpen} >
                    <CategorySelect 
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategory}
                    />
                </Modal>
            </Container>
        </TouchableWithoutFeedback>
    );
}
