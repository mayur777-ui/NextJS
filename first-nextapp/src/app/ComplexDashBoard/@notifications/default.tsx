import Card from "@/components/Card";  // Use alias for correct path
import Link from "next/link";

export default function DefaultNotifications() {
    return (
        <>
            <Card>
                <div>Notification bar</div>
                <Link href="/ComplexDashBoard/archived">Archived</Link>
            </Card>
        </>
    );
}
