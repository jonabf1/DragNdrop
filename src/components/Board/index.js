import React, { useState } from 'react';
import produce from 'immer';
import { loadLists } from '../../Services/api';

import BoardContext from './context';

import List from '../list/index';
import { Container } from './styles';

const data = loadLists();

export default function Board() {
    const [lists, setLists] = useState(data);

    function move(fromList, toList, from, to) {
        setLists(produce(lists, draft => {
            const dragged = draft[fromList].cards[from];
            draft[fromList].cards.splice(from, 1);
            console.log('to list: ', toList) //lista alvo
            console.log('to: ', to) //position do card na lista alvo
            console.log('from: ', from)//position anterior do card na lista anterior
            console.log('fromlist:', fromList)//de que lista veio o card
            draft[toList].cards.splice(to, 0, dragged);

        }))
    }

    return (
        <BoardContext.Provider value={{ lists, move }}>
            <Container>
                {lists.map((item, index) => <List key={item.title} index={index} data={item} />)}
            </Container>);
        </BoardContext.Provider>
    )
}
