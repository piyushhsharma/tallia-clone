const isGitHub = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';

module.exports = {
  output: 'export',  // ensures static export
  basePath: isGitHub ? `/${repo}` : '',
  assetPrefix: isGitHub ? `/${repo}/` : '',
};
