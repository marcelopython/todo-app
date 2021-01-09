import React from 'react';
import Grid from '../template/gride'
import IconButton from '../template/IconButton'

export default props => {
    return (
    <div role="form" className="todoForm form-row">
        <Grid cols="12 9 10">
            <input id="description" className="form-control" placeholder="Adicione uma tarefa" 
            onChange={props.handleChange}
            value={props.description}/>
        </Grid>
        <Grid cols="12 3 2">
            <IconButton icon="plus" style="primary" onClick={props.handleAdd}/>
        </Grid>
    </div>)
};