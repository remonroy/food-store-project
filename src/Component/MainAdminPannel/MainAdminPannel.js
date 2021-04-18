import React from 'react';
import Sidebar from '../DashbordSection/Sidebar/Sidebar';

const MainAdminPannel = () => {
    return (
        <section className="container-fluid row background">

            <div  className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-3 ba">
                <div className="row text-center">
                   <h1>This is Welcome page</h1>
                </div>
            </div>
        </section>
    );
};

export default MainAdminPannel;