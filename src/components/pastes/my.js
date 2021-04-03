/*my.js*/

import { Divider } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import Button from "@material-ui/core/Button"

const MyPastes = () => {
    const columns = [
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
    const rows = [{ id: 1, pasteid: "iXiEj188jaA", expiration: "19/01/2022", password: "Yes", paste_link: "http://test/link" }];
    return (
        <div style={{
            width: "100%",
            margin: "0 auto",
            padding: "50px"
        }}>
            <br />
            <h3>My Pastes</h3>
            <Divider />
            <br />
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={10} />
            </div>
        </div>
    );
};

export default MyPastes;