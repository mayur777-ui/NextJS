import Card from "@/components/Card";
import Link from 'next/link';
export default function ArchivedNotifications(){
    return (
        <>
            <Card>
                <div>Archived Notification bar</div>
                <Link href="/ComplexDashBoard">Notification 1</Link>
            </Card>
        </>
    )
} 