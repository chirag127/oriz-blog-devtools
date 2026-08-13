export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'devtools-blog',
  name: 'Toolshed',
  origin: 'https://devtools-blog.oriz.in',
  tagline: 'Dev infra and tooling for the solo builder — servers, VMs, secrets',
  description:
    'Toolshed — practical dev infra and tooling notes: home servers, free-tier VMs, secrets management, MCP servers, and the workshop behind shipping software solo.',
}
