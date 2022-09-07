/*
 * Copyright 2022 Dirk Rudolph
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = api => {
    if (api.env('test')) {
        return {
            presets: [
                ['@babel/preset-env', { targets: { node: 'current' } }]
            ],
            plugins: [
                ["@babel/plugin-transform-react-jsx", { "runtime": "automatic", "importSource": "." }]
            ]
        }
    } else {
        return {
            transform: {},
        };
    }
};