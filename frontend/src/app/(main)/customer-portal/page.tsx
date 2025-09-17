import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "~/lib/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { ExternalLink, CreditCard, Download, Settings } from "lucide-react";

export default async function CustomerPortalPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/sign-in");
  }

  return (
    <div className="container mx-auto max-w-4xl space-y-6 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Customer Portal</h1>
        <p className="text-muted-foreground">
          Manage your subscription, billing, and account preferences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Subscription Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Subscription
            </CardTitle>
            <CardDescription>
              Manage your current subscription plan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium">Free Plan</p>
              <p className="text-sm text-muted-foreground">
                You're currently on the free plan with limited credits
              </p>
            </div>
            <Button className="w-full">
              <ExternalLink className="mr-2 h-4 w-4" />
              Upgrade Plan
            </Button>
          </CardContent>
        </Card>

        {/* Billing History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Billing History
            </CardTitle>
            <CardDescription>
              Download invoices and view payment history
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm text-muted-foreground">
                No billing history available yet
              </p>
            </div>
            <Button variant="outline" className="w-full" disabled>
              <Download className="mr-2 h-4 w-4" />
              Download Invoices
            </Button>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Quick Actions
            </CardTitle>
            <CardDescription>
              Commonly used account management actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Button variant="outline" asChild>
                <a href="/account/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/account/security">
                  <Settings className="mr-2 h-4 w-4" />
                  Security
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/auth/sign-out">
                  Sign Out
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}