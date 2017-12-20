import * as React from 'react';
import { StatelessComponent } from 'react';
import { freeAccBtn, anchorTag } from '../../styles/benefits';

export const FreeAccBtn: StatelessComponent<any> = () => {
    return (
        <div style={freeAccBtn}>
            <a href='#' style={anchorTag}>I don't want full access. Start me with a free limited account.</a>
        </div>
    );
}