import { ReasonsType } from "@/types/reasons";
import audio from '@/assets/audio.png'
import video from '@/assets/video.png'
import calendar from '@/assets/calendar.png'
import security from '@/assets/security.png';

export const reasons: ReasonsType[] = [
    {
        icon: video,
        title: 'Crystal-clear HD video',
        description: 'No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.'
    },
    {
        icon: audio,
        title: 'Noise-canceling audio',
        description: 'Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.'
    },
    {
        icon: calendar,
        title: 'Scheduling made easy',
        description: "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place."
    },
    {
        icon: security,
        title: 'Bank-grade security',
        description: 'Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.'
    }
]