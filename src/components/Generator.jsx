/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from './../utils/swoldier'
import { useState } from 'react'

function Header ({index, title, description}){
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator() {

    const [ showModal, setShowModal ] = useState(false)
    const [ poison, setPoison ] = useState('individual')
    const [ muscles, setMuscles ] = useState([])
    const [ goals, setGoals ] = useState('strength_power')

    function toggleModal(){
        setShowModal(!showModal)
    }

    return (
        <SectionWrapper header={"Generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>

            {/* Header 01 */}
            <Header index={'01'} title={'Pick your poison'} description={'Select the workout you wish to endore.'}/>
            {/* Workout Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {
                    Object.keys(WORKOUTS).map((type, typeIndex) => { 
                        return (
                            <button onClick={()=>{
                                setPoison(type)
                            }}
                            className={`bg-slate-950 border duration-200 hover:border-blue-600 py-3 rounded-lg ${type === poison ? 'border-blue-600' : 'border-blue-400'}`}
                            key={typeIndex}>
                                <p className="capitalize">
                                    {type.replaceAll('_', ' ')}
                                </p>
                            </button> 
                        )}) 
                }
            </div>
            
            {/* Header 02 */}
            <Header index={'02'} title={'Lock on targets'} description={'Select the muscles judged for annihilation.'}/>
            {/* Select Workout muscle groups */}
            <div className="bg-slate-950 border border-blue-400 rounded-lg flex flex-col transition-all duration-300">
                <button onClick={toggleModal} className="relative flex items-center justify-center p-3">
                    <p>
                        Select muscle groups
                    </p>
                    <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
                </button>
                {
                    showModal && <div className=''>Modal</div>
                }
            </div>

            {/* Header 03 */}
            <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimate objective.'}/>
            {/* SCHEMES */}
            <div className="grid grid-cols-3 gap-4">
                {
                    Object.keys(SCHEMES).map((scheme, schemeIndex) => { 
                        return (
                            <button onClick={()=>{
                                setGoals(scheme)
                            }}
                            className={`bg-slate-950 border duration-200 hover:border-blue-600 py-3 rounded-lg ${scheme === goals ? 'border-blue-600' : 'border-blue-400'}`}
                            key={schemeIndex}>
                                <p className="capitalize">
                                    {scheme.replaceAll('_', ' ')}
                                </p>
                            </button> 
                        )}) 
                }
            </div>

        </SectionWrapper>
    )
}
