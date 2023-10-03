
export const basicFadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1, y: 0,
        transition: {
            ease: 'easeOut',
            duration: .8,
        }
    }
}
export const basicFadeUp2 = {
    initial: { opacity: 0, y: 30 },
    animate: {
        opacity: 1, y: 0,
        transition: {
            delay: .6,
            ease: 'easeOut',
            duration: .8,
        }
    }
}

export const basicFadeUp3 = {
    initial: { opacity: 0, y: 30 },
    animate: {
        opacity: 1, y: 0,
        transition: {
            delay: .8,
            ease: 'easeOut',
            duration: .8,
        }
    }
}

export const basicFadeDown = {
    initial: { opacity: 0, y: -40 },
    animate: {
        opacity: 1, y: 0,
        transition: {
            ease: 'easeOut',
            duration: .8,
        }
    }
}

export const basicFadeLeft = {
    initial: { opacity: 0, x: -40 },
    animate: {
        opacity: 1, x: 0,
        transition: {
            ease: 'easeOut',
            duration: .8,
        }
    }
}


export const basicFadeRight = {
    initial: { opacity: 0, x: 40 },
    animate: {
        opacity: 1, x: 0,
        transition: {
            ease: 'easeOut',
            duration: .8,
        }
    }
}

export const basicScaleUp = {
    initial: { opacity: 0.2, scale: 0.2 },
    animate: {
        opacity: 1, scale: 1,
        transition: {
            delay: 0.2,
            ease: 'easeOut',
            duration: .8,
        }
    }
}
export const basicScaleDown = {
    initial: { opacity: 0.2, scale: 1.2 },
    animate: {
        opacity: 1, scale: 1,
        transition: {
            delay: 0.2,
            ease: 'easeOut',
            duration: .8,
        }
    }
}

