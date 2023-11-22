import React from 'react'
import ClaimsLayout from '../../layouts/claims'

export default function ClaimsPage({}) {
    const SubmitClaim = function (claimData = {
        policyNumber: 0,
        productType: null,
        fileInput: null,
        claimDescription: null,
    }) {

    }
    return <ClaimsLayout SubmitClaim={SubmitClaim} />
}