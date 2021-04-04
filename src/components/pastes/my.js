/*public.js*/

import { Divider } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { Component } from "react"
import { Link } from "react-dom"
import Button from "@material-ui/core/Button"
class MyPastes extends Component {
    /*
     res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   */
    getToken = () => {
        console.log(this?.props?.user?.storage[Object.keys(this?.props?.user?.storage)[0]] ?? "pas de token")
        return (this?.props?.user?.storage[Object.keys(this?.props?.user?.storage)[0]] ?? "Anonymous")
    }
    constructor(props, rows, columns) {
        super(props);
        this.state = {
            rows: [],
            columns: []
        }
        this.columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'pasteid', headerName: 'Paste id', width: 130 },
            { field: 'expiration', headerName: 'Expiration Date', width: 130 },
            { field: 'password', headerName: 'Password', width: 130 },
            {
                field: 'paste_link', headerName: 'Paste Link', width: 130,
                renderCell: (params) => (
                    <strong>
                        <a href={params.value}>
                            <Button>
                                Open
                            </Button>
                        </a>
                    </strong>
                )
            },
        ];
        this.rows = [];
    }
    async componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: {
                "accesstoken": this.getToken()
            }
        };
        let call_resp = await fetch("https://b7yutqw6pf.execute-api.us-east-1.amazonaws.com/api/paste/get/my", requestOptions);
        let call_res = await call_resp.json()
        let pastes = call_res["pastes"]
        if (pastes === undefined) {
            return;
        }
        for (const paste of pastes) {
            //console.log(paste);
            // id, title, expiration, password (?), //LINK ?
            let link = "/paste/get/" + paste["uid"];
            this.rows.push({ id: paste["id"], pasteid: paste["id"], expiration: paste["expiration"], password: (paste["password"] !== "") ? "True" : "False", paste_link: link })
        }
        this.setState({ columns: this.columns })
        this.setState({ rows: this.rows })
    }
    render() {
        let rows = this.state.rows;
        let columns = this.state.columns;
        return (
            <div style={{
                width: "100%",
                margin: "0 auto",
                padding: "50px"
            }}>
                <br />
                <h3>Public Pastes</h3>
                <Divider />
                <br />
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} pageSize={5} />
                </div>
            </div>
        );
    };
};

export default MyPastes;