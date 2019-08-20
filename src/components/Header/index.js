import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

class Header extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        const { author, description, social } = userConfig;
        const {isPagePost} = this.props;

        return (
            <Container>
                <Wrapper>
                    {userConfig.showHeaderImage && !isPagePost && (
                        <HeaderImage/>
                    )}
                    <H1><Link to="/">{author}</Link></H1>
                    <P>{description}</P>
                    {social &&
                    <Social
                        website={social.website}
                        github={social.github}
                        gitlab={social.gitlab}
                        twitter={social.twitter}
                        linkedin={social.linkedin}
                    />
                    }
                </Wrapper>
            </Container>
        );
    }
}
export default Header;
