import React from 'react';
import { Logo, HeaderContainer } from './styles';
import Icone from '../../assets/logo_tree.png';

function Header(props) {
    return (
        <>
            <HeaderContainer>
                <Logo src={Icone} alt='swf2020 - Encurtador de URL' />
                <h1>swf2020</h1>
                <p>{props.children}</p>

                <a href='https://pngtree.com/'>logo_ref</a>
            </HeaderContainer>
        </>
    )
}

export default Header;