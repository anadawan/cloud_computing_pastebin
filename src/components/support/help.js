/*help.js*/

import { Divider } from '@material-ui/core';
import { Link } from "react-router-dom";

const HelpPage = () => {
    return (

        <div style={{
            width: "100%",
            margin: "0 auto",
            padding: "50px"
        }}>
            <br />
            <h3>Help</h3>
            <Divider />
            <div style={{ "padding-left": "5em" }}>
                <u>- Without being logged in :</u><br />
                <div style={{ "padding-left": "5em" }}>
                    Select on the menu on the left <b>Pastes</b> ⇒ <b><Link to="/paste/new">New Pastes 📓</Link></b>
                </div>
            </div>
            <div style={{ "padding-left": "5em" }}>
                <u>- While being logged in :</u><br />
                <div style={{ "padding-left": "5em" }}>
                    If not registered yet, select on the menu on the left <b><Link to="/register">Register 👤</Link></b> and then <b>register with identifiers</b><br />
                    Click <b><Link to="/login">Login</Link> 🔑</b> and then <b>login with identifiers</b><br />
                    Select on the menu on the left <b>Pastes</b> ⇒ <b><Link to="/paste/new">New Pastes 📓</Link></b><br />
                </div>
            </div>
            <div style={{ "padding-left": "5em" }}>
                <u>- Paste options :</u><br />
                <div style={{ "padding-left": "5em" }}>
                    There is several options you can use for pastes :<br />

                    <div style={{ "padding-left": "5em" }}>
                        - <u>password</u> 🔏 : Password locking the Paste<br />
                    - <u>expiration</u>⏳ : Setting expiration date for the Paste<br />
                    - <u>encryption</u> 🔐: Encrypt the Paste<br />
                    - <u>acl</u> 👨👩: Accreditation list for different users to access Paste<br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;