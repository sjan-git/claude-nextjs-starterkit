import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowRight, ExternalLink, Layers, Palette, Rocket, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">StarterKit</span>
          </div>
          <nav className="flex items-center gap-4">
            <Badge variant="secondary">v1.0.0</Badge>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/sjan-git/claude-nextjs-starterkit" target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-20 px-6 py-16">
        {/* Hero */}
        <section className="space-y-6 text-center">
          <Badge className="mx-auto">
            <Rocket className="mr-1 h-3 w-3" />
            Next.js 15 + Tailwind v4 + shadcn/ui
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Build faster.
            <br />
            <span className="text-muted-foreground">Ship with confidence.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            프로덕션 수준의 스타터킷. 현대적인 툴링, 아름다운 컴포넌트,
            개발자 경험을 극대화한 구성으로 바로 시작하세요.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg">
              시작하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              컴포넌트 보기
            </Button>
          </div>
        </section>

        {/* Feature Cards */}
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground">모든 것이 포함됨</h2>
            <p className="mt-2 text-muted-foreground">엄선된 기술 스택, 바로 사용 가능.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Next.js 15",
                description: "App Router, React Server Components, Turbopack 개발 서버, 스트리밍 SSR.",
              },
              {
                icon: Palette,
                title: "Tailwind CSS v4",
                description: "CSS-first 설정. @theme 블록으로 모든 것을 관리. config 파일 불필요.",
              },
              {
                icon: Layers,
                title: "shadcn/ui",
                description: "Radix UI 기반의 접근성 높고 완전히 커스터마이즈 가능한 컴포넌트.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <Card key={title} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Component Showcase */}
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground">컴포넌트 쇼케이스</h2>
            <p className="mt-2 text-muted-foreground">바로 사용 가능한 인터랙티브 컴포넌트.</p>
          </div>
          <Tabs defaultValue="buttons" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-4">
              <TabsTrigger value="buttons">버튼</TabsTrigger>
              <TabsTrigger value="inputs">입력</TabsTrigger>
              <TabsTrigger value="cards">카드</TabsTrigger>
              <TabsTrigger value="misc">기타</TabsTrigger>
            </TabsList>

            <TabsContent value="buttons">
              <Card>
                <CardHeader>
                  <CardTitle>Button 변형</CardTitle>
                  <CardDescription>모든 버튼 스타일과 크기.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon" aria-label="rocket">
                    <Rocket className="h-4 w-4" />
                  </Button>
                  <Button disabled>Disabled</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="inputs">
              <Card>
                <CardHeader>
                  <CardTitle>폼 입력</CardTitle>
                  <CardDescription>다양한 상태의 입력 필드.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="기본 입력" />
                  <Input placeholder="비활성화 입력" disabled />
                  <Input type="email" placeholder="email@example.com" />
                  <Input type="password" placeholder="비밀번호" />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cards">
              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">shadcn</CardTitle>
                        <CardDescription>@shadcn</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      UI 컴포넌트 배포의 미래를 만들어가고 있습니다.
                    </p>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Button size="sm">팔로우</Button>
                    <Button variant="outline" size="sm">메시지</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>알림</CardTitle>
                    <CardDescription>읽지 않은 메시지 3개.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {["디자인 리뷰", "새 배포 완료", "PR 승인됨"].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-md border border-border p-3"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-sm">{item}</span>
                        <Badge variant="secondary" className="ml-auto">New</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="misc">
              <Card>
                <CardHeader>
                  <CardTitle>Badge, Avatar & Skeleton</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                  <Separator />
                  <div className="flex gap-3">
                    {["A", "B", "C"].map((l) => (
                      <Avatar key={l}>
                        <AvatarFallback>{l}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                    <Skeleton className="h-4 w-3/5" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <footer className="mt-20 border-t border-border py-8 text-center text-sm text-muted-foreground">
        Built with Next.js 15, Tailwind CSS v4, and shadcn/ui
      </footer>
    </div>
  );
}
