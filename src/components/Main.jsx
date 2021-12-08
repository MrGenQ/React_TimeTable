import React from "react";
import {Container} from "react-bootstrap";
import {Button, Card, FormSelect, Form, Table} from "react-bootstrap";
const Main = () => {
    const options = [
        {
            label: "--Pasirinkti įmonę--"
        },
        {
            label: "Web dream World"
        },
        {
            label: "Testing unit"
        },
        {
            label: "IT pros"
        },
        {
            label: "React masters"
        }
    ]
    const optionsServices = [
        {
            label: "--Pasirinkite paslaugą--"
        },
        {
            label: "React developing"
        },
        {
            label: "UX design"
        },
        {
            label: "Testing"
        }
    ]
    return(
        <>
            <Container>
                <Card>
                    <Card.Header>
                        <Button type="submit">Pridėti</Button>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <Form className="d-flex">
                                <Form.Text className="text-muted mb-3">
                                Duomenų filtravimas:
                                </Form.Text>
                            <Form.Select className="mb-3">
                                {options.map((option) => (<option value={option.value}>{option.label}</option>))}
                            </Form.Select>
                            <Form.Select className="mb-3">
                                {optionsServices.map((option) => (<option value={option.value}>{option.label}</option>))}
                            </Form.Select>
                                <Button className="mb-3" type="submit">Taikyti filtrą</Button>
                            </Form>
                        </Card.Title>
                        <Card.Text>
                            <h3>Darbų sąrašas:</h3>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Klientas</th>
                                    <th>Suteikta paslauga</th>
                                    <th>Aprašymas</th>
                                    <th>Trukmė</th>
                                    <th>Keisti</th>
                                    <th>Šalinti</th>
                                </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </Table>
                        </Card.Text>
                    </Card.Body>
                </Card>


            </Container>
        </>
    )
}
export default Main