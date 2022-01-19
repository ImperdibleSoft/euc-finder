// @ts-ignore
import changelogMarkdown from '../../CHANGELOG.md';

const isVersionLine = (line: string) => line.startsWith('## ');
const isChangeTypeLine = (line: string) => line.startsWith('### ');
const isChangeLine = (line: string) => line.startsWith('- ');

enum ChangeType {
  major = 'major',
  minor = 'minor',
  patch = 'patch'
}

export interface Version {
  versionName: string;
  major: string[];
  minor: string[];
  patch: string[];
}

export const getChangelogFromMarkdown = () => {
  const lines = (changelogMarkdown as string).split('\n');
  let currVersion: string;
  let changeType: ChangeType;

  const changelog = lines.reduce((versions, line) => {
    if (!versions.length && !isVersionLine(line)) {
      return versions;
    }

    if (isVersionLine(line)) {
      const versionName = line.replace('## ', '');
      const newVersion: Version = {
        versionName,
        major: [],
        minor: [],
        patch: []
      };

      currVersion = versionName;
      versions.push(newVersion);
      return versions;
    }

    if (isChangeTypeLine(line)) {
      const ct = line
        .replace('### ', '')
        .replace(' Changes', '')
        .toLowerCase();

      changeType = ct as ChangeType;
      return versions;
    }

    if (isChangeLine(line)) {
      const msg = line.replace('- ', '');
      const versionIndex = versions.findIndex(v => v.versionName === currVersion);

      if (versionIndex >= 0) {
        versions[versionIndex] = {
          ...versions[versionIndex],
          [changeType]: [
            ...versions[versionIndex][changeType],
            msg
          ]
        };
      }

      return versions;
    }

    return versions;
  }, [] as Version[]);

  // eslint-disable-next-line no-console
  console.log(changelog);

  return changelog;
};
