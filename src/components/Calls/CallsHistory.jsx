import React from 'react'
import CallsIncomingCard from './CallsCard/CallsIncomingCard'
import CallsMissedCard from './CallsCard/CallsMissedCard'
import CallsOutgoingCard from './CallsCard/CallsOutgoingCard'

export default function CallsHistory() {
  return (
    <div className='ml-[356px] sm:ml-[256px] sm:mt-[400px] sm:mr-0 md:mt-[400px] md:mr-0 mr-[300px] mt-[170px]'>
      
      <div><CallsMissedCard/></div>
      <div><CallsOutgoingCard/></div>
      <div><CallsIncomingCard/></div>
      <div><CallsMissedCard/></div>
      <div><CallsOutgoingCard/></div>
      <div><CallsIncomingCard/></div>
      <div><CallsMissedCard/></div>
      <div><CallsOutgoingCard/></div>
      <div><CallsIncomingCard/></div>
      <div><CallsMissedCard/></div>
      <div><CallsOutgoingCard/></div>
      <div><CallsIncomingCard/></div>
      <div><CallsMissedCard/></div>
      <div><CallsOutgoingCard/></div>
      <div><CallsIncomingCard/></div>
      <div><CallsMissedCard/></div>
      <div><CallsOutgoingCard/></div>
      <div><CallsIncomingCard/></div>
    </div>
  )
}
