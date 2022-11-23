import { ReactDOM } from 'react';
import { render } from '@testing-library/react';
import react from 'react';
import Aceptada from './Aceptada';
import Finalizada from './Finalizada';
import Solicitada from './Solicitada';
import Cancelada from './Cancelada';

function RenderizadoCondicionalEstados({estado}){
    if (estado === 'Solicitada'){
        return(
            <Solicitada />
        );
    }
    else if (estado === 'Aceptada'){
        return(
            <Aceptada />
        );
    }
    else if (estado === 'Finalizada'){
        return(
            <Finalizada />
        );
    }
    else if (estado === 'Cancelada'){
        return(
            <Cancelada />
        )
    }
};

export default RenderizadoCondicionalEstados;


