import { Transform } from '../Util.js';
import { Node } from '../Node.js';
import { Rect } from './Rect.js';
import { Group } from '../Group.js';
import { ContainerConfig } from '../Container.js';
import { GetSet, IRect, Vector2d } from '../types.js';
export interface Box extends IRect {
    rotation: number;
}
export interface TransformerConfig extends ContainerConfig {
    resizeEnabled?: boolean;
    rotateEnabled?: boolean;
    rotationSnaps?: Array<number>;
    rotationSnapTolerance?: number;
    rotateAnchorOffset?: number;
    borderEnabled?: boolean;
    borderStroke?: string;
    borderStrokeWidth?: number;
    borderDash?: Array<number>;
    anchorFill?: string;
    anchorStroke?: string;
    anchorStrokeWidth?: number;
    anchorSize?: number;
    anchorCornerRadius?: number;
    keepRatio?: boolean;
    centeredScaling?: boolean;
    enabledAnchors?: Array<string>;
    flipEnabled?: boolean;
    node?: Rect;
    ignoreStroke?: boolean;
    boundBoxFunc?: (oldBox: Box, newBox: Box) => Box;
    useSingleNodeRotation?: boolean;
    shouldOverdrawWholeArea?: boolean;
}
export declare class Transformer extends Group {
    _nodes: Array<Node>;
    _movingAnchorName: string;
    _transforming: boolean;
    _anchorDragOffset: Vector2d;
    sin: number;
    cos: number;
    _cursorChange: boolean;
    constructor(config?: TransformerConfig);
    attachTo(node: any): this;
    setNode(node: any): this;
    getNode(): Node<import("../Node.js").NodeConfig>;
    _getEventNamespace(): string;
    setNodes(nodes?: Array<Node>): this;
    _proxyDrag(node: Node): void;
    getNodes(): Node<import("../Node.js").NodeConfig>[];
    getActiveAnchor(): string;
    detach(): void;
    _resetTransformCache(): void;
    _getNodeRect(): any;
    __getNodeShape(node: Node, rot?: number, relative?: Node): {
        rotation: number;
        x: number;
        y: number;
        width: number;
        height: number;
    };
    __getNodeRect(): {
        x: number;
        y: number;
        width: number;
        height: number;
        rotation: number;
    };
    getX(): any;
    getY(): any;
    getWidth(): any;
    getHeight(): any;
    _createElements(): void;
    _createAnchor(name: any): void;
    _createBack(): void;
    _handleMouseDown(e: any): void;
    _handleMouseMove(e: any): void;
    _handleMouseUp(e: any): void;
    getAbsoluteTransform(): Transform;
    _removeEvents(e?: any): void;
    _fitNodesInto(newAttrs: any, evt?: any): void;
    forceUpdate(): void;
    _batchChangeChild(selector: string, attrs: any): void;
    update(): void;
    isTransforming(): boolean;
    stopTransform(): void;
    destroy(): this;
    toObject(): any;
    clone(obj?: any): this;
    getClientRect(): IRect;
    nodes: GetSet<Node[], this>;
    enabledAnchors: GetSet<string[], this>;
    rotationSnaps: GetSet<number[], this>;
    anchorSize: GetSet<number, this>;
    resizeEnabled: GetSet<boolean, this>;
    rotateEnabled: GetSet<boolean, this>;
    rotateAnchorOffset: GetSet<number, this>;
    rotationSnapTolerance: GetSet<number, this>;
    padding: GetSet<number, this>;
    borderEnabled: GetSet<boolean, this>;
    borderStroke: GetSet<string, this>;
    borderStrokeWidth: GetSet<number, this>;
    borderDash: GetSet<number[], this>;
    anchorFill: GetSet<string, this>;
    anchorStroke: GetSet<string, this>;
    anchorCornerRadius: GetSet<number, this>;
    anchorStrokeWidth: GetSet<number, this>;
    keepRatio: GetSet<boolean, this>;
    centeredScaling: GetSet<boolean, this>;
    flipEnabled: GetSet<boolean, this>;
    ignoreStroke: GetSet<boolean, this>;
    boundBoxFunc: GetSet<(oldBox: Box, newBox: Box) => Box, this>;
    anchorDragBoundFunc: GetSet<(oldPos: Vector2d, newPos: Vector2d, e: MouseEvent) => Vector2d, this>;
    shouldOverdrawWholeArea: GetSet<boolean, this>;
    useSingleNodeRotation: GetSet<boolean, this>;
}
