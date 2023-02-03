import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addActiveCard, deleteActiveCard } from '../../../redux/reducers/CinemaBranchReducer';

import { Avatar, Card } from 'antd';
const { Meta } = Card;

export default function CinemaBranchCard(props) {
    let activeCards = useSelector(state => state.CinemaBranchReducer.activeCards);
    let dispatch = useDispatch();

    let classNameCard = "cardBranch";

    for (let i = 0; i <= activeCards.length; i++) {
        try {
            if (props.order == activeCards[i].order && props.maHeThong == activeCards[i].maHeThong) {
                classNameCard = "active-" + props.maHeThong;
                break;
            }
        } catch (error) {
            classNameCard = "cardBranch"
        }
    }

    let onClickFunction = () => {
        props.onClick();
        dispatch(deleteActiveCard(props.maHeThong));
        let payload = {
            order: props.order,
            maHeThong: props.maHeThong
        }
        dispatch(addActiveCard(payload));
    }

    return (
        <Card
            style={{
                width: 300,
                marginTop: 16,
            }}
            onClick={() => onClickFunction()}
            className={classNameCard}
        >
            <Meta
                avatar={<Avatar src={props.avatar} />}
                title={props.title}
                description={props.description}
            />
        </Card>
    )
}
