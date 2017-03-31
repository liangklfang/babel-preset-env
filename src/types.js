//@flow

// Module Types
export type AMD = "amd";
export type Commonjs = "commonjs";
export type Systemjs = "systemjs";
export type UMD = "umd";
export type Module = AMD | Commonjs | Systemjs | UMD;

// Target types
type TargetType = number;
type NodeType = TargetType | "current" | true;

// Options
export type ModuleOption = Module | boolean;
export type DebugOption = boolean;
export type LooseOption = boolean;
export type IncludeOption = Array<string>;
export type ExcludeOption = Array<string>;
export type WhitelistOption = Array<string>;
export type UseBuiltInsOption = boolean;
export type BrowserslistQuery = Array<string> | string;
export type TargetsOption = {
  [target: string]: TargetType,
  browsers?: BrowserslistQuery,
  node?: NodeType,
};
export type Options = {
  whitelist?: Array<string>,
  include?: IncludeOption,
  exclude?: ExcludeOption,
  modules?: ModuleOption,
  debug?: DebugOption,
  loose?: LooseOption,
  moduleType?: ModuleOption,
  targets?: TargetsOption,
  useBuiltIns?: UseBuiltInsOption,
};
export type StrictOptions = {|
  debug: DebugOption,
  include?: IncludeOption,
  exclude?: ExcludeOption,
  loose: LooseOption,
  moduleType: ModuleOption,
  targets: TargetsOption,
  useBuiltIns: UseBuiltInsOption,
|};

// Data
export type DataType = {
  [target: string]: number,
};

// Babel
export type PluginType = [Object, Options];
