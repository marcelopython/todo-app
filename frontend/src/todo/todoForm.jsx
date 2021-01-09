import React from 'react';
import Grid from '../template/gride'
import IconButton from '../template/IconButton'

export default props => {

    const keyhandle = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()

        }else if(e.key === 'Escape'){
            props.handleClear();
        }

    }

    return (
        <div role="form" className="todoForm form-row">
            <Grid cols="12 9 10">
                <input id="description" className="form-control" placeholder="Adicione uma tarefa" 
                onChange={props.handleChange}
                onKeyUp={keyhandle}
                value={props.description}/>
            </Grid>
            <Grid cols="12 3 2">
                <IconButton icon="plus" style="primary" onClick={props.handleAdd}/>
                <IconButton icon="search" style="info" onClick={props.handleSearch}/>
                <IconButton icon="close" style="default" onClick={props.handleClear}/>
            </Grid>
        </div>
    )
};
