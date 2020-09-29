import React from "react";
import Table from "./subComponents/Table";
import MainLayout from "./layouts/MainLayout";

function Home() {
  return (
    <MainLayout>
      <section>
        {/* <AreaChart /> */}
        <Table />
      </section>
    </MainLayout>
  );
}

export default Home;
