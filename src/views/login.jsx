import React from 'react'
import { SignIn, SignUp } from '../containers'
import { Tabs } from '../components'

export default function(){
    return (
        <Tabs>
            <SignIn label='SignIn'/>
            <SignUp label='SignUp'/>
        </Tabs>
    )
}