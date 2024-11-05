'use client'

import { BasicOnlineMeetingComponent } from '@/components/basic-online-meeting';
import { MeetPageComponent } from '@/components/meet-page';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export default function page() {

    const searchParams = useSearchParams();

    const hearingaid = searchParams.get('hearingaid') ?? "1";



    useEffect(() => {
        console.log(hearingaid)
    }, [])

    return (
        <div>
            <MeetPageComponent hearingAid={hearingaid} />
        </div>
    )
}
