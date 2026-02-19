import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import InstallBlock from "@/components/InstallBlock";
import DocBlock from "@/components/DocBlock";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";
import { useState } from "react";

export default function OtpInputPage() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <StorybookLayout>
      <PageHeader title="OTP Input" subtitle="One-time password input fields for verification codes." />

      <InstallBlock
        install="npx shadcn-ui@latest add input-otp"
        importCode={`import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";`}
        usage={`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
      />

      <DocBlock
        usage="Use InputOTP for verification codes, PINs, and two-factor authentication. Provides individual digit slots with automatic focus management."
        doItems={["Use InputOTPSeparator to visually group digits (e.g., 3+3)", "Auto-submit when all slots are filled", "Provide clear instructions about where the code was sent"]}
        dontItems={["Don't use for regular text input", "Avoid more than 8 slots — consider a standard input instead"]}
        apiRows={[
          { prop: "maxLength", type: "number", desc: "Total number of input slots" },
          { prop: "value", type: "string", desc: "Controlled input value" },
          { prop: "onChange", type: "(value: string) => void", desc: "Callback when value changes" },
          { prop: "InputOTPGroup", type: "component", desc: "Groups adjacent slots together" },
          { prop: "InputOTPSlot", type: "component", desc: "Individual digit input slot" },
          { prop: "InputOTPSeparator", type: "component", desc: "Visual separator between groups" },
        ]}
      />

      <ComponentSection title="6-Digit Code" description="Standard verification code input with separator.">
        <div className="space-y-3">
          <InputOTP maxLength={6} value={value1} onChange={setValue1}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-xs text-muted-foreground">Value: {value1 || "—"}</p>
        </div>
      </ComponentSection>

      <ComponentSection title="4-Digit PIN" description="Short PIN entry without separator.">
        <div className="space-y-3">
          <InputOTP maxLength={4} value={value2} onChange={setValue2}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-xs text-muted-foreground">Value: {value2 || "—"}</p>
        </div>
      </ComponentSection>
    </StorybookLayout>
  );
}
