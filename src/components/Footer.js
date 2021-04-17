import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <p>
                all rights reserved ©{' '}
                <span style={{ color: 'coral', fontWeight: 500 }}>PhotoGallery</span>
            </p>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: whitesmoke;
    color: gray;
    padding: 15px 0;
    text-align: center;

    p {
        margin-bottom: 0;
    }
`;
