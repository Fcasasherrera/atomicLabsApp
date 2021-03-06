import React from 'react';
import Router from './router';
import { FadeInView } from './shared/components';

interface AppProps { }

const App = (props: AppProps) => {
    return (
        <FadeInView style={{ flex: 1 }}>
            <Router />
        </FadeInView>
    );
};

export default App;
