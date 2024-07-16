export default function Footer() {
    return (
      <>
        <div className="bg-[#ee5449] md:min-h-32 min-h-16"></div>
        <div className="bg-slate-950 min-h-10">
          <div className="container">
            <div className="text-slate-400 py-4">© 2024. Development by <a className="underline" href="https://github.com/redhocode" target="_blank">Redho Arifin</a>.</div>
          </div>
          <span className=" text-sm text-muted-foreground">
           Version: 1.1
          </span>
        </div>
      </>
    );
}