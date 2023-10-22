interface Button {
  btnClass?: string;
  title: string;
  onClick?: () => void;
}

interface GithubAuth {
  clientId: string;
  clientSecret: string;
}

interface Progress {
  progress: number;
}

interface ArrayType {
  // eslint-disable-next-line @typescript-eslint/ban-types
  map: Function;
}

interface FolderStructure {
  parentId: string;
}