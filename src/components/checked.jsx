import React from 'react'
import { Checkbox } from '@material-ui/core'

const Checked = ({ checked, setChecked, labelUrl, label }) => {
    return (
        <div style={{ marginTop: '2em' }}>
            <Checkbox
                checked={checked}
                onChange={e => setChecked(e.target.checked) }
                value='primary'
                color='primary'
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <a href={labelUrl ? labelUrl : '#'} style={{
                marginRight: '1.5em',
                textDecoration: 'none',
                fontSize: '10pt',
                color: 'white',
                textDecorationColor: 'white'
            }}>{label}</a>
        </div>
    )
}

export default Checked