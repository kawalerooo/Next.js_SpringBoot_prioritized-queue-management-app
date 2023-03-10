import React from 'react';
import InformationBar from "../components/InformationBar";
import {Stack, TextField} from "@mui/material";
import TicketForm from "../components/TicketForm";

const GetTicketPage = ({tickets}) => {
    return (
        <div>
            <InformationBar barTitle={"Odbierz bilet"} />
            <Stack spacing={2} sx={{pl: '20%', pt: '5%', pr: '20%'}}>
                <TicketForm tickets={tickets} />
            </Stack>
        </div>
    );
};

export default GetTicketPage;

export async function getServerSideProps() {
    let res = await fetch(`http://localhost:8080/api/v1/tickets`);
    const tickets = await res.json();

    return { props: { tickets } };
}