import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useState } from 'react';
import accountService from './accountService';

export default function AccountComponent() {

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
          const data = await accountService.getAccounts();
          setAccounts(data);
        };
        fetchUsers();
        
        setAccounts([
            {code: "code1", name: "name1", category: "cat1", quantity: 120},
            {code: "code2", name: "name2", category: "cat2", quantity: 130}
        ]);
    }, []);

    return (
            <div>
                <div className="card">
                    <DataTable value={accounts}>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>
            </div>
        );
}