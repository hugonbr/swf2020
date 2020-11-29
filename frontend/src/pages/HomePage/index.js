import React from 'react';
import Header from '../../components/Header';
import { Container, InputGroup, FormControl, Button, Alert, Spinner } from 'react-bootstrap';
import { AdsBlock, ContentContainer, Form } from './styles';
import ShortenerService from '../../services/ShortenerService';

//OBS: Troquei o link de 'https://swf2020.tk/' para 'http://localhost:3000/'
//para poder usar o app localmente. Quando for para a AWS eu mundo para swf.

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            url: '',
            code: '',
            errorMessage: '',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { url } = this.state;
        this.setState({ isLoading: true, errorMessage: '' });
        if (!url) {
            this.setState({ isLoading: false, errorMessage: 'Informe uma url para encurtar' });
        } else {
            try {
                const service = new ShortenerService();
                const result = await service.generate({ url });
                this.setState({ isLoading: false, code: result.code });
            } catch (error) {
                this.setState({ isLoading: false, errorMessage: 'Ops, ocorreu um erro' });
            }
        }
    }

    copyToClipboard = () => {
        const element = this.inputURL;
        element.select();
        document.execCommand('copy');
    }

    render() {
        const { isLoading, errorMessage, code } = this.state;
        return (
            <Container>
                <Header>Seu novo encurtador de URL. :)</Header>
                <ContentContainer>
                    <Form onSubmit={this.handleSubmit}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Digite a url para encurtar"
                                defaultValue=""
                                onChange={e => this.setState({ url: e.target.value })}
                            />
                            <InputGroup.Append>
                                <Button variant="info" type="submit">Encurtar</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        {isLoading ? (
                            <Spinner animation="border" />
                        ) : (
                                code && (
                                    <>
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                autoFocus={true}
                                                defaultValue={`https://swf2020.tk/${code}`}
                                                ref={(input) => this.inputURL = input}
                                            />
                                            <InputGroup.Append>
                                                <Button variant="outline-info" onClick={() => this.copyToClipboard()} >Copiar</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <p>Para acompanhar as estatísticas, acesse https://swf2020.tk/{code}</p>
                                    </>
                                )
                            )}
                        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    </Form>
                </ContentContainer>
                <ContentContainer>
                    <AdsBlock>
                        Adsense
                    </AdsBlock>
                </ContentContainer>
            </Container>
        )
    }
}

export default HomePage;