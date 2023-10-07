import { PiCopyrightFill } from 'react-icons/pi';
import { TiSocialFacebookCircular, TiSocialInstagram, TiSocialTwitter, TiSocialYoutube} from 'react-icons/ti';

import moment from 'moment';

const Allright = () => {
    return (
  

        <div className="footer items-center p-4 bg-neutral text-neutral-content ">
        <aside className="items-center grid-flow-col">
        <PiCopyrightFill size={30}></PiCopyrightFill>
          <p>Copyright © 2019-{moment().format('YYYY')} S Wedding Planner, All rights reserved.</p>
        </aside> 
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <TiSocialFacebookCircular size={30}></TiSocialFacebookCircular>
        <TiSocialTwitter size={30}></TiSocialTwitter>
        <TiSocialInstagram size={30}></TiSocialInstagram>
        <TiSocialYoutube size={30}></TiSocialYoutube>
        </div>
      </div>
    );
};

export default Allright;
