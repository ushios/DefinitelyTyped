// Type definitions for newrelic
// Project: https://github.com/newrelic/node-newrelic
// Definitions by: UshioShugo <https://github.com/ushios>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'newrelic' {
	var newrelic: NewrelicStatic;

	export = newrelic;
}

interface NewrelicStatic {

    /**
     * Default Agent constructor
     */
    (): Newrelic.Agent;

    /**
     * Create a new Agent
     * @param config
     */
    (config: Newrelic.Config): Newrelic.Agent;

}

declare namespace Newrelic {
    interface Config {
        appName: string[];
        lisenceKey: string;
        logging?: Logging;
    }

    interface Logging {
        level: string;
    }

    interface Agent {
        start(fn: Function): void;
    }
}
