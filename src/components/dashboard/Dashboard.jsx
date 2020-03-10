import React from 'react';
import './Dashboard.sass';
import { Neow } from '../widgets/widgetCollector';

function Dashboard() {
  return (
    <main className="Dashboard">
      <Neow size={{ gridArea: '4/ 1 / 1/ 4' }} />
    </main>
  );
}

export default Dashboard;
