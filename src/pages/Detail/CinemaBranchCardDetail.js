import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addActiveCard, deleteActiveCard } from '../../../redux/reducers/CinemaBranchReducer';

import { Avatar, Card } from 'antd';
const { Meta } = Card;

export default function CinemaBranchCardDetail(props) {
    return (
        <Card
            style={{
                width: 300,
                marginTop: 16,
            }}
            onClick={() => { props.onClick() }}
        >
            <Meta
                avatar={<Avatar src={props.avatar} />}
                title={props.title}
                description={props.description}
            />
        </Card>
    )
}
