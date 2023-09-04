import React from 'react';

type TileProps = {
    className?: string;
    children?: string | JSX.Element | JSX.Element[];
};

function Tile(props: TileProps) {
    const { className, children } = props;
    return <div className={`tile-container-div ${className}`}>{children}</div>;
}

export default Tile;
