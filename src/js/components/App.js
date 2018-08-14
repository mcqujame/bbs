import React from 'react';
import CurrentGacha from './CurrentGacha';
import PullControl from './PullControl';
import PullSummary from './PullSummary';
import Results from './Results';
import AddForm from './AddForm';

const App = () => (
    <div>
        <div>
            <CurrentGacha />
            <PullControl />
            <PullSummary />
        </div>
        <div>
            <Results />
        </div>
    </div>
);

export default App;
