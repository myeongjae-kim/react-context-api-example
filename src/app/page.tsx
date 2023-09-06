import FooTemplate from "@/app/foo/components/templates/FooTemplate";
import FooTemplateAlter from "@/app/foo/components/templates/FooTemplateAlter";
import FooImmutableTemplate from "@/app/foo/components/templates/FooImmutableTemplate";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <FooTemplate />
      <FooTemplateAlter />
      <FooImmutableTemplate />
    </main>
  )
}
