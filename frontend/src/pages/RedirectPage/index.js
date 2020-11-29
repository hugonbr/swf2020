import React from 'react';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShortenerService from '../../services/ShortenerService';

class RediretcPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            url: '',
            errorMessage: '',
        }
    }

    async componentDidMount() {
        const { code } = this.props.match.params;

        try {
            const service = new ShortenerService();
            const { url } = await service.getLink(code);

            window.location = url;
        } catch (error) {
            this.setState({ isLoading: false, errorMessage: 'Ops, a url não existe' });
        }
    }

    render() {
        return (
            <Container>
                <Header>
                    Redirecionando...
                </Header>
            </Container>
        )
    }
}

export default RediretcPage;