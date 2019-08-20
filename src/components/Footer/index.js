import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import Social from '../Social';
import H1 from '../H1';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

function Footer({ config }) {
  const { author, description, social } = config;

  return (
    <Container>
      <Wrapper>
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

export default Footer;
