import React from 'react'
import { useParams } from 'react-router-dom';
import ExplorePageLayout from '../../layouts/explore'

export default function ExplorePage({}) {

    const { policy } = useParams();
    
    return <ExplorePageLayout policy={policy}/>
}