import React from 'react'
import Input1 from '../Step1/Input1'
import Input2 from '../Step2/Input2'
import Input3 from '../Step3/Input3'
import Input4 from '../Step4/Input4'
import Input5 from '../Step5/Input5'

function Input6 ({stepData}) {

    const {step1, step2, step3, step4, step5} = stepData;

    return (
        <div id="input" className='flex flex-col items-start justify-center gap-10 w-full'>
            <Input1 step1={step1} />
            <Input2 step2={step2} />
            <Input3 step3={step3} />
            <Input4 step4={step4} />
            <Input5 step5={step5} />
        </div>
    )
}

export default Input6;