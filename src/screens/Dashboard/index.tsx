import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { Highlight } from '../../components/HighlightCard';
import { TrasactionCard, TransactionCardProps } from '../../components/TransactionCard';

import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Trasactions,
    Title,
    TrasactionsList,
    LogoutButton
} from './styles'

export interface DataListProps extends TransactionCardProps{
    id: string;
}
export function Dashboard() {

    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: "Desenvolvimento de Site",
            amount: "R$ 12.000,00",
            category: {
                name: "Vendas",
                icon: "dollar-sign"
            },
            date: "13/04/2020"
        },
        {
            id: '2',
            type: 'negative',
            title: "Hamburgueria Prime",
            amount: "R$ 59,00",
            category: {
                name: "Alimentação",
                icon: "coffee"
            },
            date: "13/04/2020"
        },
        {
            id: '3',
            type: 'positive',
            title: "Salário",
            amount: "R$ 4.000,00",
            category: {
                name: "Salário",
                icon: "dollar-sign"
            },
            date: "06/04/2020"
        },
        {
            id: '4',
            type: 'negative',
            title: "Prestação da Casa",
            amount: "R$ 850,00",
            category: {
                name: "Casa",
                icon: "home"
            },
            date: "05/04/2020"
        },
        {
            id: '5',
            type: 'negative',
            title: "Supermercado",
            amount: "R$ 645,00",
            category: {
                name: "Casa",
                icon: "home"
            },
            date: "05/04/2020"
        },
    ]   

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={ {uri: 'https://media-exp1.licdn.com/dms/image/C5603AQGEaVzzlVsN5w/profile-displayphoto-shrink_100_100/0/1517245810680?e=1641427200&v=beta&t=H53JReyGYGhW2g_dw93fBxW7mrvZ7hsvIkSffB2ehoY'} } />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Odair Bidóia </UserName>
                        </User>
                    </UserInfo>
                    <LogoutButton onPress={() => {}}>
                        <Icon name="power" />
                    </LogoutButton>
                </UserWrapper>
            </Header>

            <HighlightCards>
                <Highlight 
                    type="up"
                    title="Entrada" 
                    amount="R$ 17.140,00" 
                    lastTransaction="Última entrada dia 13 de abril"/>
                <Highlight 
                    type="down"
                    title="Saídas" 
                    amount="R$ 10.252,50" 
                    lastTransaction="Ùltima saída dia dia 16 de abril"/>
                <Highlight 
                    type="total"
                    title="Total" 
                    amount="R$ 6.887,50" 
                    lastTransaction="Período entre 3 e 16 de abril"/>
            </HighlightCards>

            <Trasactions>                
                <Title>Listagem</Title>
                <TrasactionsList
                    data={data}
                    keyExtractor={ item  => item.id }
                    renderItem={
                        ({ item }) => <TrasactionCard data={ item } />
                    }
                    
                    
                />                                
            </Trasactions>
        </Container>
    );
}
